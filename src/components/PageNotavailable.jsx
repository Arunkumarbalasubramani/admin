import React from "react";
import { Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PageNotavailable = () => {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div class="container-fluid">
        {/* 404 Error Text  */}
        <div class="text-center">
          <div class="error mx-auto" data-text="404">
            404
          </div>
          <p class="lead text-gray-800 mb-5">Page Not Found</p>
          <p class="text-gray-500 mb-0">
            It looks like you found a glitch in the matrix...
          </p>
          <Nav.Link
            onClick={() => {
              navigate("/");
            }}
            className="boot-link"
          >
            &larr; Back to Dashboard
          </Nav.Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotavailable;
