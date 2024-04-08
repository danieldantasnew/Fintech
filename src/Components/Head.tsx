import React from 'react'

const Head = ({title, description}: {title: string, description: string}) => {

  React.useEffect(()=> {
    document.title = 'Fintech | ' + title;
    const desc = document.querySelector<HTMLMetaElement>("meta[name='description']") 
    if(desc) {
      desc.setAttribute('content', description || '');
    }
  }, [title, description]);

  return (
    <></>
  )
}

export default Head