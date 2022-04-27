import React,{useState, useEffect} from 'react'
import {Link,} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {postVideogames, getplatforms} from '../../redux/Actions/index'
import style from './form.module.css'

export const Form = () => {
    const dispatch = useDispatch();

    
    // const history = useHistory(); 
    const genres = useSelector((state) => state.genres);
    const platforms = useSelector((state) => state.platforms);
    const [errors, setErrors] = useState(true);
    const [input, setInput] = useState({
      name:"",
      description:"",
      released:"",
      rating:"",
      background_image:"",
      platforms: [],
      genres:[],
    });
    
    useEffect(()=>{
      dispatch(getplatforms() )
    }, [dispatch])
  
      
      
      function validate(input){
        let regexRating = /\d{1}[.]\d{2}/;
        let regexName = /[a-zA-Z0-9:-\s’']/;
        let regexDescription = /^.{1,300}$/;

        let errors = {};
        if(!input.name.trim()){
          errors.name = "A name is required"
        }else if(!regexName.test(input.name.trim())){
          errors.name = "The name field only accepts letters, numbers and characters"
        }
        
        if(!input.description.trim()){
          errors.description ="A description is required"
        }else if(!regexDescription.test(input.description.trim())){
          errors.description = "It must not exceed 300 characters"
        }
        
      if (input.rating.trim()>5) {
        errors.rating = "The realeased field is required"
      } else if (!regexRating.test(input.rating.trim())) {
          errors.rating = ""
      }
        return errors;
      }
      
      
    function handleChange(e){
      setInput({
        ...input,
        [e.target.name] : e.target.value
      })
      setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
      }))
    }
    
    function handleSelect(e){
      setInput({
        ...input,
        genres:[...input.genres, e.target.value]
      })
    }

    function handlePlatforms(p){
      setInput({
        ...input,
        platforms:[...input.platforms, p.target.value]
      })
    }
    
    function handleSubmit(e){
      e.preventDefault();
      console.log(input)
      setInput({
        name:"",
        description:"",
        released:"",
        rating:"",
        background_image:"",
        platforms: [],
        genres:[]
      })
      if (input.name.length > 0 && input.description.length > 0 && input.rating > 0) return dispatch(postVideogames(input)),alert("Video game created successfully")
     alert("debe completar algunos campos")
    }
    
  return (
    <>
      <div>
        <Link to="/home"><button className={style.button}>Back</button></Link>
      </div>
          <h1>Create videogames</h1>
          <form onSubmit={e=>handleSubmit(e)}>
              <div>
                  <div >
                  <p className={style.input}>Name</p>
                  <input
                     className={style.texto}
                     type="text"
                     value={input.name}
                     name="name"
                    //  placeholder="Name"
                     placeholder={errors.name}
                    //  key={input.name}
                     onChange={e=>handleChange(e)}
                  />
                  
                  {/* {errors.name && (
                    <p>{errors.name}</p>
                  )} */}
                  </div>

                  <div>
                      <p className={style.input}>description:</p>
                     <textarea
                     className={style.texto}
                     cols = "50"
                     rows = "5"
                     type="text"
                     value={input.description}
                     name="description"
                     placeholder={errors.description}
                    //  key={input.description}
                     onChange={e=>handleChange(e)}
                  />
                  {/* {errors.description&&(
                    <p>{errors.description}</p>
                  )} */}
                  </div>

                  <div>
                     <p className={style.input}>Released date:</p>
                      <input
                      className={style.texto}
                      type="date"
                      value={input.released}
                      name="released"
                      placeholder="Release"
                      // key={input.released}
                      onChange={e=>handleChange(e)}
                  />
                  </div>

                  <div>
                      <p className={style.input}>Rating:</p>
                      <input
                      className={style.texto}
                      type="number"
                      value={input.rating}
                      name="rating"
                      placeholder="1-5"
                      // key={input.rating}
                      onChange={e=>handleChange(e)}
                      />
                      {errors.rating&&(
                        <p>{errors.rating}</p>
                      )}
                  </div>

                  <div>
                      <p className={style.input}>Image:</p>
                      <input
                      className={style.texto}
                      type="text"  //type="image"
                      value={input.image}
                      name="image"
                      placeholder="image"
                      // key={input.image}
                      onChange={e=>handleChange(e)}
                      />
                  </div>

                  <div className={style.caja1} >
                    <p>Genres</p>
                     <select onChange={handleSelect} className={style.caja1}>
                     {genres.map(e => (
                            <option value = {e.name} key={e.name} >{e.name}</option>
                        ))}
                     </select>
                     <ul><li>{input.genres.map(e=>e+" ,")}</li></ul>

                  </div>

                  <div className={style.caja2}>
                    <p >Platforms</p>
                  <select onChange={e=>handlePlatforms(e)} className={style.caja2}>
                    {platforms.map(p=>(
                      <option value = {p.name} key={p.name} >{p.name}</option>
                    ))}
                  </select>
                  <ul ><li>{input.platforms.map(p=>p+" ,")}</li></ul>
                  </div>
              </div>

                     <button className={style.button} type="submit" >Create videogames</button>
          </form>

    </>
  )
}
export default Form;