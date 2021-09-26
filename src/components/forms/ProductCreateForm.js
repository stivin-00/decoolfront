import React from "react";
import { Select } from "antd";

const { Option } = Select;

const ProductCreateForm = ({
  handleSubmit,
  handleChange,
  setValues,
  values,
  handleCatagoryChange,
  subOptions,
  showSub,
}) => {
  // destructure
  const {
    title,
    description,
    price,
    categories,
    category,
    subs,
    shipping,
    quantity,
    images,
    colors,
    brands,
    color,
    brand,
  } = values;

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label style={{ fontSize: "14px"}}>Title</label>
        <input
          type="text"
          name="title"
          className="form-control"
          value={title}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label style={{ fontSize: "14px"}}>Description</label>
        <input
          type="text"
          name="description"
          className="form-control"
          value={description}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label style={{ fontSize: "14px"}}>Price (₦)</label>
        <input
          type="number"
          name="price"
          className="form-control"
          value={price}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label style={{ fontSize: "14px"}}>Shipping</label>
        <select
          name="shipping"
          className="form-control"
          onChange={handleChange}
          style={{height: "40px"}}
        >
          <option>Please select</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>
      </div>

      <div className="form-group">
        <label style={{ fontSize: "14px"}}>Quantity</label>
        <input
          type="number"
          name="quantity"
          className="form-control"
          value={quantity}
          onChange={handleChange}
          style={{height: "40px"}}
        />
      </div>

      <div className="form-group">
        <label style={{ fontSize: "14px"}}>Color</label>
        <select name="color" className="form-control" onChange={handleChange} style={{height: "40px"}}>
          <option>Please select</option>
          {colors.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label style={{ fontSize: "14px"}}>Brand</label>
        <select name="brand" className="form-control" onChange={handleChange} style={{height: "40px"}}>
          <option>Please select</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label style={{ fontSize: "14px"}}>Category</label>
        <select
          name="category"
          className="form-control"
          onChange={handleCatagoryChange}
          style={{height: "40px"}}
        >
          <option>Please select</option>
          {categories.length > 0 &&
            categories.map((c) => (
              <option key={c._id} value={c._id}>
                {c.name}
              </option>
            ))}
        </select>
      </div>

      {showSub && (
        <div className="form-group" style={{ display: "flex", flexDirection: "column", width: "100%"}}>
          <label style={{ fontSize: "14px"}}>Sub Categories</label>
          <Select
            mode="multiple"
            // style={{ width: "100%" }}
            placeholder="Please select"
            value={subs}
            onChange={(value) => setValues({ ...values, subs: value })}
            style={{height: "40px"}}
          >
            {subOptions.length &&
              subOptions.map((s) => (
                <Option key={s._id} value={s._id}>
                  {s.name}
                </Option>
              ))}
          </Select>
        </div>
      )}

      <br />
      <button className="btn btn-outline-info">Save</button>
    </form>
  );
};

export default ProductCreateForm;
