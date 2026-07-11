import React,{useState,useEffect,useRef} from 'react';
import './Research.css';
import sinhalaSignImg from "../../assets/images/sinhalasign.png";
import researchBg from "../../assets/images/research.png";

const achievements=[
 {title:"First-of-its-Kind Translation Pipeline",description:"Developed a complete research pipeline integrating Sinhala text translation, gloss sequence generation, and sign language video generation into a single execution workflow."},
 {title:"State-of-the-Art NLP Performance",description:"Achieved a Test BLEU score of 46.14 by fine-tuning NLLB-200 with optimized hyperparameters, outperforming Sinhala BERT Medium-V2 by 10.72 points."},
 {title:"Expert-Verified Parallel Corpus",description:"Created a custom corpus containing 3,363 Sinhala sentence-gloss pairs from educational textbooks validated by a native Sinhala Sign Language teacher."},
 {title:"Scalable Video Dataset Expansion",description:"Expanded the SSL400 dataset with 340 newly recorded gesture videos, creating a repository of 724 verified sign video clips."},
 {title:"Robust Retrieval-Based Fallback",description:"Designed a low-latency retrieval-based video generation approach using efficient gloss sequence lookup suitable for low-resource environments."}
];

export default function Research(){

 const [active,setActive]=useState(0);
 const [show,setShow]=useState(false);
 const ref=useRef(null);

 useEffect(()=>{
  const observer=new IntersectionObserver(([e])=>{
   if(e.isIntersecting)setShow(true);
  },{threshold:.2});

  if(ref.current)observer.observe(ref.current);
  return()=>observer.disconnect();
 },[]);

 const next=()=>setActive((active+1)%achievements.length);
 const prev=()=>setActive((active-1+achievements.length)%achievements.length);

 return(
  <section
    ref={ref}
    id="research"
    className={`research ${show ? "show" : ""}`}
    style={{
      backgroundImage: `linear-gradient(rgba(5,5,5,.8), rgba(5,5,5,.9)), url(${researchBg})`
    }}
  >
   <h2>Research</h2>

   <div className="research-container">

    <div className="research-image">
     <img src={sinhalaSignImg} alt="Sinhala Sign Research"/>
    </div>

    <div className="research-content">

     <h3>
      SinhalaSign
      <span>Text-to-Gloss-to-Video Translation Framework</span>
     </h3>

     <p>
      An AI-powered translation pipeline designed to bridge the communication gap for the Deaf community in Sri Lanka. The system translates Sinhala text into Sinhala Sign Language gloss sequences and maps them into verified sign language videos.
     </p>

     <div className="research-stats">
      <div><strong>46.14</strong><span>Test BLEU Score</span></div>
      <div><strong>3,363</strong><span>Sentence Pairs</span></div>
      <div><strong>724</strong><span>Sign Videos</span></div>
     </div>

     <div className="achievement-box">

      <button className="achievement-arrow" onClick={prev}>
       <i className="fas fa-chevron-left"></i>
      </button>

      <div className="achievement-card" key={active}>
       <h4>{achievements[active].title}</h4>
       <p>{achievements[active].description}</p>
      </div>

      <button className="achievement-arrow" onClick={next}>
       <i className="fas fa-chevron-right"></i>
      </button>

     </div>

    </div>

   </div>

  </section>
 );
}