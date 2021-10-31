import {useEffect,  useState} from 'react'
import Head from "next/head"
import axios from "axios"


const Quiz = () => {
    const [quiz, setQuiz] = useState([]) 
    const getQuizzes = async () => {

try {
     const response = await axios.get('/api/quiz')
     
     if (response?.data?.success){
            setQuiz(response.data.data)
        }
    }
    catch (error) {
        console.log(error?.response.data)
    }
}
   
useEffect(() => {
    getQuizzes()
},[])


return (
<div>

    <Head>
        <title>JSON</title>
    </Head>

<h3>Printed JSON</h3>

<p>This is the current JSON file, if you add something new it will be updated here.</p>

    <section id="json">
        {JSON.stringify(quiz)}
    </section>

</div>
)

}

export default Quiz