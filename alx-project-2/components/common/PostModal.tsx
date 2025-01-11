import { useState } from "react";
import { PostModalProps } from "@/interfaces";

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();
        onSubmit(title, content);
        setTitle('');
        setContent('');
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50'>
            <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md'>
                <h2 className='text-2xl font-bold mb-4'>Create a new Post</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4'>
                      <label htmlFor='title' className='block text-sm font-medium text-gray-700'>Title</label>
                      <input 
                        type="text" 
                        className="w-full border border-gray-700 font-medium rounded-md p-2"
                        value={title}
                        onChange={(e) => setTitle(e.target.value) }
                        required
                         />
                    </div>

                    <div className="flex justify-end space-x-4">
                         <button 
                           className=" bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-md" 
                           type="button"
                           onClick={onClose}
                           >
                            Cancel
                        </button>
                        <button 
                           className=" bg-blue-600 text-white hover:bg-blue-700"
                            type="submit"
                        >
                            Submit
                        </button>


                    </div>
                </form>
            </div>

        </div>
    );

};
export default PostModal;