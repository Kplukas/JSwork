function Dog({dog, i}){
    return (
        <div style={{display: 'inlineBlock'}}>
            <h3>{i +1}.</h3>
            <div className='ovalCage'>{dog}</div>
        </div>
    );
}

export default Dog;