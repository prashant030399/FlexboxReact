import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

function Header()
{
return<>

  <div className='header'>
CSS Responsive
  </div>

  </>


}


function Header1()
{
return<>

  <div className='header1'>
Flexbox Cards
  </div>

  </>

}

function Container(props)
{
return<>
{




<div className='box'>

<div className='boxh' >
{props.x}
</div>


<div className='boxf'>
  {props.y}
  </div>


<div className='button'>
  {props.z}
</div>



</div>
    


}


</>



}


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

<>
  <Header/>
  <Header1/>
  <Container x="React" y="ggjjhjbasf ajsfbasjfv jbcdadscads jb asjcbasncb asc jasbcfasf  bajsbasjb   "  z="Read more"/>
  <Container  x="Vue"  y=" kjsasfasfn asjfbasc jasbcas ckjasbsncas fcjaskfn  "  z="Read more"   />
  <Container  x="Angular"   y=" kjsasfasfn asjfbasc jasbcas ckjasbsncas fcjaskfn jbfsdjbsdjfb sbshasbfasf asjfcbsdfbv "  z="Read more"   />
  <Container  x="jQuery"  y=" kjsasfasfn asjfbasc jasbcas ckjasbsncas fcjaskfn sbcnsdbc asnbcasncb ascbasnvn jsbvsndvb  "    z="Read more"   />
  
  


  </>




)










