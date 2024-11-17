import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";



const ImageSliser =  ({url,limit})=>{

    const [images,setImages]  = useState([])
    const [error,setError] = useState(null)
    const [currentSlide,setCurrentSlide] = useState(0)

    async function fetchmages(url){

        try{

            const respose  = await axios.get(`${url}?page=1&limit=${limit}`)
            setImages(respose.data)
            console.log(respose.data)

        }
        catch(e){
            console.log(e)
            setError(e.message)

        }
    }

    useEffect(()=>{

        if(url !== ''){
            fetchmages(url)
        }

    },[url])


    if(error){
        return (<div>{error}</div>)
    }


    function handlePrevious(){

        setCurrentSlide(currentSlide  === 0 ? images.length-1: currentSlide - 1)
    }

    function handleNext(){
        setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
    }


    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left"/>
            {

                images.map((image,index)=>(
                    <div image-div >
                        <img className={index === currentSlide ? "image" : "hide-image"} src={image.download_url}></img>
                    </div>
                ))

            }
            <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right"/>

            <span className="circle-indicators">
                {
                    images && images.length ? (
                       images.map((_,index)=>(
                        <button className= {index === currentSlide ? "current" : "hide-current"}
                          key={index}
                        >

                        </button>
                       ))
                    ):
                    null
                }
            </span>
        </div>
    )
}

export default ImageSliser