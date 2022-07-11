import { db } from "./firecongig"
import { useState, useEffect } from "react"
import {
  collection,
  onSnapshot,
  doc,
  addDoc,
  deleteDoc
} from "firebase/firestore"

function App() {

//  Dfine 
  const [recipes, setRecipes] = useState([])


  /// ba9i mahtajitouch
  const [form, setForm] = useState({
    title: "",
    desc: "",
    ingredients: [],
    steps: []
  })



  const [popupActive, setPopupActive] = useState(false)
///////////////////////


//////   


//// had lwla katjib lia tkhrbi9 kaml dial firebase 
  const recipesCollectionRef = collection(db, "recipes")




  useEffect(() => {



    onSnapshot(recipesCollectionRef, snapshot => {
    setRecipes(snapshot.docs.map(doc => {
      return{
        id: doc.id,
        viewing:false,
        ...doc.data()
      }
    }

    ))

        })
     
  
  }, [])
  
 const handleView =id => {
   const recipesClone = [...recipes]

   recipesClone.forEach(recipe => {
    if (recipe.id == id ){
      recipe.viewing= !recipe.viewing

    }else{
      recipe.viewing = false
    }
   })
   setRecipes (recipesClone)
 }


  return (
    <div className="App">
     <h1>recipes</h1>
     <button> add recipe</button>


    <div className="recipes">
      {recipes.map((recipe,i) => (
        <div className="recipe" key={recipe.id}>
         <h2>{recipe.title}</h2>
         <p dangerouslySetInnerHTML={{__html: recipe.desc}}></p>
         { recipe.viewing &&  <div>

          <h4> ingredientss</h4>
          <ul>
           {
            recipe.ingredients.map((ingredient,i)=>(
              <li key={i}>{ingredient }</li>
            ))
           }
          </ul>
            <h4>steps</h4>
            <ol>
              {
                recipe.steps.map((step,i)=>(
                  <li key= {i}>{step}</li>
                )) }
            </ol>
          </div>}

          <div className="buttons"> 
          <button onClick={()=> handleView(recipe.id)}>view{recipe.viewing ? 'less':'more'}</button>
          <button className="remove">Remove recipe</button>

            </div>
        </div>

      ))}
      
       </div>
       
    </div>
  );
}

export default App;