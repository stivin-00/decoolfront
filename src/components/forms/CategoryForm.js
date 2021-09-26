import React from 'react'

const CategoryForm = ({handleSubmit, name, setName}) => (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label style={{ fontSize: "14px"}}>Name</label>
        <input
          type="text"
          className="form-control"
          onChange={(e) => setName(e.target.value)}
          value={name}
          autoFocus
          required
        />
        <br />
        <button className="btn btn-outline-primary">Save</button>
      </div>
    </form>
)

export default CategoryForm


// we distructured the props here so the will have access to it in perent component
// REplace curly brackets will normal brackets when not using render