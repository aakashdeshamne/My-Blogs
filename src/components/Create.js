const Create = (props) => {
    return ( 
        <div className="create">
            <h2>Add the New Blog</h2>
            <form>
                <label>Blog Title</label>
                <input type="text" 
                required/>
                <label>Blog Body</label>
                <textarea   required ></textarea>
                <label>Blog Auther</label>
                <select>
                    <option value="aakash">aakash</option>
                    <option value="abhishekh">abhishekh</option>
                </select>
                <button>Add Blog</button>
            </form>
        </div>
     );
}
 
export default Create;