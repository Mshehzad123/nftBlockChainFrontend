import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

function Createyour() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 const onSubmit = async (data) => {
  const formData = new FormData();
  formData.append('itemTitle', data.itemTitle);
  formData.append('descriptionForItem', data.descriptionForItem);
  formData.append('yourUsername', data.yourUsername);
  formData.append('priceOfItem', data.priceOfItem);
  formData.append('royalties', data.royalties);
  
  // Ensure you're appending the file properly
  if (data.file && data.file[0]) {
    formData.append('file', data.file[0]);  // Get the first file from input
  }

  try {
    const res = await axios.post('http://localhost:4001/createnft', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    if (res.data) {
      toast.success("🎉NFT created successfully!");
      navigate('/'); // Redirect to home page on success
    }
  } catch (err) {
    toast.error(`❌ Error: ${err.message}`);
  }
};



  return (
    <>
      <div>
  <div className="page-heading normal-space">
   <div className="container">
     <div className="row">
       <div className="col-lg-12">
         <h6>Liberty NFT Market</h6>
         <h2>Create Your NFT Now.</h2>
         <span>
         <Link to='/' ><span className=' text-blue-700'>Home</span></Link> &gt; <span className=' text-white'> Create Yours</span>

         </span>
         <div className="buttons">
           <div className="main-button">
             <Link to="/explore">Explore Our Items</Link>
           </div>
           <div className="border-button">
             <Link to="/createyour">Create Your NFT</Link>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
 <div className="item-details-page">
   <div className="container">
     <div className="row">
       <div className="col-lg-12">
         <div className="section-heading">
           <div className="line-dec" />
           <h2>Apply For <em>Your Item</em> Here.</h2>
         </div>
       </div>
       <div className="col-lg-12">
         <form id="contact" action method="post" onSubmit={handleSubmit(onSubmit)}>
           <div className="row">
             <div className="col-lg-4">
               <fieldset>
                 <label htmlFor="title">Item Title</label>
                 <input type="title" name="title" id="title" placeholder="Ex. Lyon King" autoComplete="on" required 
                            {...register("itemTitle", { required: true })}
                
                 />
               </fieldset>
             </div>
             <div className="col-lg-4">
               <fieldset>
                 <label htmlFor="description">Description For Item</label>
                 <input type="description" name="description" id="description" placeholder="Give us your idea" autoComplete="on" required 
                            {...register("descriptionForItem", { required: true })}
                 
                 />
               </fieldset>
             </div>
             <div className="col-lg-4">
               <fieldset>
                 <label htmlFor="username">Your Username</label>
                 <input type="username" name="username" id="username" placeholder="Ex. @alansmithee" autoComplete="on" required
                            {...register("yourUsername", { required: true })}
                 
                 />
               </fieldset>
             </div>
             <div className="col-lg-6">
               <fieldset>
                 <label htmlFor="price">Price Of Item</label>
                 <input type="price" name="price" id="price" placeholder="Price depends on quality. Ex. 0.06 ETH" autoComplete="on" required 
                            {...register("priceOfItem", { required: true })}
                 
                 />
               </fieldset>
             </div>
             <div className="col-lg-6">
               <fieldset>
                 <label htmlFor="royalities">Royalties</label>
                 <input type="royalities" name="royalities" id="royalities" placeholder="Common royalties 1-25%" autoComplete="on" required 
                            {...register("royalties", { required: true })}
                 
                 />
               </fieldset>
             </div>
             <div className="col-lg-4">
               <fieldset>
                 <label htmlFor="file">Your File</label>
                 <input type="file" id="file" name="myfiles[]" multiple 
                            {...register("file", { required: true })}
                 
                 />
                          {errors.file && <span className='text-sm text-danger'>kindly select the file </span>}

               </fieldset>
             </div>
             <div className="col-lg-8">
               <fieldset>
                 <button type="submit" id="form-submit" className="orange-button">Submit Your Applying</button>
               </fieldset>
             </div>
           </div>
         </form>
       </div>
       <div className="col-lg-12">
         <div className="section-heading">
           <div className="line-dec" />
           <h2>This Is <em>Your Item</em> Preview.</h2>
         </div>
       </div>
       <div className="col-lg-7">
         <div className="left-image">
           <img src={require("../../assets/images/create-yours.jpg")} alt="" style={{borderRadius: 20}} />
         </div>
       </div>
       <div className="col-lg-5 align-self-center">
         <h4>Dolores Haze Westworld Eye</h4>
         <span className="author">
           <img src={require("../../assets/images/author-02.jpg")} alt="" style={{maxWidth: 50, borderRadius: '50%'}} />
           <h6>Kataleya Smithee<br /><a href="/">@kataleey</a></h6>
         </span>
         <p>Lorem ipsum dolor sit amet, consectetu dipiscingei elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         <div className="row">
           <div className="col-3">
             <span className="bid">
               Current Bid<br /><strong>0.06 ETH</strong><br /><em>($8055,35)</em>
             </span>
           </div>
           <div className="col-4">
             <span className="owner">
               Owner<br /><strong>Alan Smithee</strong><br /><em>(@asmithee)</em>
             </span>
           </div>
           <div className="col-5">
             <span className="ends">
               Ends In<br /><strong>3D 05H 20M 58S</strong><br /><em>(January 22nd, 2021)</em>
             </span>
           </div>
         </div>
       </div>
     </div>
   </div>
 </div>
</div> 
    </>
  )
}

export default Createyour