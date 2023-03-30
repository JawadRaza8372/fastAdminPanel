import React from "react"

const PostCard = () => {


    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src="" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h2 className="card-title">Title</h2>
                    <p className="card-text">Desc</p>
                    <div className='butns'>
                        <div className='de'> <button type="button" data-toggle="modal" data-target="#myModal"> Details </button> </div>
                        <div className='re'> <button> Remove </button> </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PostCard