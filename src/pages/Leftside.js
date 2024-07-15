// components/Sidebar.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';


import { FaUser } from 'react-icons/fa';
import Toggle from '../component/Toggel';

const Leftside = () => {

    const [chats, setChats] = useState([]);

    const [message,setMessages]= useState([])

    const [page,setPage] = useState(1)
    const [ttpage,setttPage] = useState()

    // const check = (int)=>{
    //     if( int % 2 ===0)return true;

    //     return false
    // }

    const fetchmessge = async(id)=>{
        try {
            const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${id}`);
                    setMessages(response.data.data);
                    console.log(response.data.data)
            
        } catch (error) {
            console.error('Error fetching chats:', error);
            
        }
    }

    // useEffect(() => {
    //     const fetchChats = async () => {
    //       try {
    //         const response = await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1');
    //         setChats(response.data.data.data);
    //         console.log(response.data.data.data)
    //       } catch (error) {
    //         console.error('Error fetching chats:', error);
    //       }
    //     };
    
    //     fetchChats();
    //   }, []);


    

    const fetchMore = async (pages) => {
        setPage(pages)
        if(pages > ttpage) return
        try {
          const response = await axios.get(`https://devapi.beyondchats.com/api/get_all_chats?page=${pages}`);
          setChats([...chats,...response.data.data.data]);
          // console.log(response.data.data.data)
        } catch (error) {
          console.error('Error fetching chats:', error);
        }
      };
    


    useEffect(() => {
        const fetchChats = async () => {
            if(page > ttpage) return
            try {
              const response = await axios.get(`https://devapi.beyondchats.com/api/get_all_chats?page=1`);
              setttPage(response.data.data.last_page)
              setChats( response.data.data.data);
              // console.log("chats data" ,response.data.data.data)
            } catch (error) {
              console.error('Error fetching chats:', error);
            }
          };
      
  
      fetchChats(page);
    }, []);

  return (
    <div className="flex h-[90vh] overflow-hidden z-10">
    <div className="bg-blue-500 text-white w-[40%] flex-shrink-0 relative overflow-y-auto">
    <div className="p-4 flex items-center">
        <Toggle/>
    </div>
      <div className="p-4">
        <input type="text" placeholder="Search" className="bg-gray-200 text-gray-800 rounded-lg w-full px-4 py-2 outline-none" />
      </div>
      <div className="p-4">
        {chats.map(chat => (
          <div key={chat.id} className={`bg-gray-200 flex justify-between  items-center rounded-lg mb-2 text-black p-2 cursor-pointer hover:bg-gray-300 ${!chat.creator.name && "hidden bg-red-500"}`} onClick={()=>fetchmessge(chat.id)} >
            <p>{chat.creator.name }</p><p className='flex flex-col'>{chat.msg_count}<span className='text-orange-500'>messages</span></p>
          </div>
        ))}
      </div>

      <div className='w-full flex justify-center'>
      {
        page < ttpage && (<button className='mx-auto bg-purple-600 px-5 py-3 text-3xl font-bold rounded-lg ' onClick={()=>fetchMore(page+1)}>Load More...</button>)
      }
      </div>
    </div>
    <div className="flex-1 bg-gray-100 overflow-y-scroll">
      <div className="p-4 border-b border-gray-300 flex items-center">
        <FaUser className="mr-2" size={24} />
        <span className="text-xl font-semibold">Contact Name</span>
      </div>
      {/* Messages container */}
      <div className="p-4">
        {/* Example message */}
        <div className="flex items-start mb-4">
          <div className="flex-shrink-0">
            <FaUser className="mt-1 mr-2" size={16} />
          </div>
          <div className="bg-white rounded-lg p-2 w-full overflow-auto">
            {
                message.map((mess,index)=>{
                    return (
                        <div className='w-full px-6 py-3 ' key={index}>
                            <p className={`text-gray-800   ${mess.sender_id ===1 ? "text-right  bg-green-300 rounded-md" : "text-left"}`}>{mess.message}</p>
                          </div>  
                        
                    )
                })
            }
            
          </div>
        </div>
        {/* Add more messages as needed */}
      </div>
      {/* Message input */}
      <div className="p-4 border  fixed bottom-0 w-[70%]">
        <input type="text" placeholder="Type your message..." className="bg-gray-200  text-black rounded-lg w-full px-4 py-2 outline-black border-black" />
      </div>
    </div>
    </div>
  );
};

export default Leftside;
