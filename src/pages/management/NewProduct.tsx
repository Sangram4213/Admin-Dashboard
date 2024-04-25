import { useState,ChangeEvent } from "react";
import AdminSideBar from "../../components/AdminSideBar";

const NewProduct = () => {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [photo, setPhoto] = useState<string>("");

  const changeImageHandler=(e:ChangeEvent<HTMLInputElement>)=>{
       
    const file:File | undefined=e.target.files?.[0];

    console.log(file);

    const reader:FileReader = new FileReader();

    if(file){
       reader.readAsDataURL(file);
       console.log(reader);
       reader.onloadend= ()=>{
        if(typeof reader.result === 'string') setPhoto(reader.result);
       }
    }
  }
  return (
    <div className="admin-container">
      <AdminSideBar />
      <main className="product-managemet">
        <article>
          <form action="">
            <h2>New Product</h2>
            <div>
              <label>Name</label>
              <input
              required
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
              required
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock</label>
              <input
              required
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => setStock(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Photo</label>
              <input
                type="file"
                onChange={changeImageHandler}
              />
            </div>
            {
              photo && <img src={photo} alt="New Image" />
            }
            <button type="submit">Create</button>
          </form>
        </article>
      </main>
    </div>
  );
};

export default NewProduct;
