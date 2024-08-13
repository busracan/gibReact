import React, { useState } from 'react';

function Card() {
  // like?
  const [like, setLike] = useState(0);

  return (
    <>
      <div className="card mb-2">
        <img
          src="https://picsum.photos/id/237/150/100"
          className="card-img-top w-100"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="#"
            className="btn btn-primary"
            onClick={() => setLike(like + 1)}
          >
            Like {like}
          </a>
        </div>
      </div>
    </>
  );
}

export default Card;
