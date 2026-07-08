import React from 'react'
import Details from './Components/Details'
import ShowDetails from './Components/ShowDetails'
import PostDetails from './Components/PostDetails';
import Counter from './Components/Counter';
import Fruit from './Components/Fruit';
import Form from './Components/Form';
import Age from './Components/Age';
import RandomNumberGenerator from './Components/RandomNumberGenerator'



export default function App() {
  // const details =[
  //   {name : "Rudra", age : 21, city : "Kolkata"},
  //   {name : "Sampa", age : 20, city : "New york"},
  //   {name : "Rohit", age : 11, city : "Kolkata"},
  //   {name : "Rimpa", age : 21, city : "Kolkata"},
  // ]

  // let userComponent = [];
  // for(let user of details)
  // {
  //   userComponent.push(<Details name = {user.name} age = {user.age} city = {user.city}/>)
  // }


  // const posts = [
  // {
  //   id: 1,
  //   title: "10 React Tips Every Developer Should Know",
  //   author: "Sarah Johnson",
  //   authorAvatar: "https://i.pravatar.cc/50?img=1",
  //   content: "React hooks have revolutionized how we write components. Here are my top 10 tips for writing cleaner, more maintainable React code...",
  //   likes: 342,
  //   comments: 56,
  //   shares: 28,
  //   category: "Programming",
  //   isPublished: true,
  //   createdAt: "2026-06-20T10:30:00Z",
  //   tags: ["react", "javascript", "webdev"],
  //   readTime: 5
  // },
  // {
  //   id: 2,
  //   title: "The Future of Artificial Intelligence in 2026",
  //   author: "Michael Chen",
  //   authorAvatar: "https://i.pravatar.cc/50?img=2",
  //   content: "As AI continues to evolve, we're seeing unprecedented advancements in natural language processing and computer vision...",
  //   likes: 521,
  //   comments: 89,
  //   shares: 134,
  //   category: "Technology",
  //   isPublished: true,
  //   createdAt: "2026-06-21T14:20:00Z",
  //   tags: ["ai", "machinelearning", "future"],
  //   readTime: 8
  // },
  // {
  //   id: 3,
  //   title: "Healthy Meal Prep Ideas for Busy Professionals",
  //   author: "Emily Rodriguez",
  //   authorAvatar: "https://i.pravatar.cc/50?img=3",
  //   content: "Eating healthy doesn't have to be time-consuming. With these 5 meal prep strategies, you can save hours in the kitchen...",
  //   likes: 189,
  //   comments: 34,
  //   shares: 67,
  //   category: "Lifestyle",
  //   isPublished: false,
  //   createdAt: "2026-06-19T08:45:00Z",
  //   tags: ["health", "food", "mealprep"],
  //   readTime: 6
  // },
  // {
  //   id: 4,
  //   title: "Understanding JavaScript Closures",
  //   author: "James Wilson",
  //   authorAvatar: "https://i.pravatar.cc/50?img=4",
  //   content: "Closures are one of the most powerful and misunderstood concepts in JavaScript. Let's break them down with simple examples...",
  //   likes: 276,
  //   comments: 43,
  //   shares: 91,
  //   category: "Programming",
  //   isPublished: true,
  //   createdAt: "2026-06-18T16:10:00Z",
  //   tags: ["javascript", "programming", "beginners"],
  //   readTime: 7
  // },
  // {
  //   id: 5,
  //   title: "Top 5 Travel Destinations for Summer 2026",
  //   author: "Aisha Patel",
  //   authorAvatar: "https://i.pravatar.cc/50?img=5",
  //   content: "From the beaches of Bali to the streets of Barcelona, here are the must-visit destinations for your summer vacation...",
  //   likes: 415,
  //   comments: 72,
  //   shares: 203,
  //   category: "Travel",
  //   isPublished: true,
  //   createdAt: "2026-06-17T09:00:00Z",
  //   tags: ["travel", "summer", "vacation"],
  //   readTime: 9
  // },
  // {
  //   id: 6,
  //   title: "Getting Started with TypeScript in 2026",
  //   author: "David Kim",
  //   authorAvatar: "https://i.pravatar.cc/50?img=6",
  //   content: "TypeScript has become the standard for large-scale JavaScript applications. Here's why you should adopt it today...",
  //   likes: 198,
  //   comments: 31,
  //   shares: 45,
  //   category: "Programming",
  //   isPublished: false,
  //   createdAt: "2026-06-16T13:30:00Z",
  //   tags: ["typescript", "javascript", "coding"],
  //   readTime: 5
  // },
  // {
  //   id: 7,
  //   title: "Mindfulness Techniques for Daily Life",
  //   author: "Lisa Thompson",
  //   authorAvatar: "https://i.pravatar.cc/50?img=7",
  //   content: "In our fast-paced world, mindfulness can be a game-changer. These 7 techniques will help you stay present and reduce stress...",
  //   likes: 334,
  //   comments: 58,
  //   shares: 112,
  //   category: "Wellness",
  //   isPublished: true,
  //   createdAt: "2026-06-15T11:15:00Z",
  //   tags: ["mindfulness", "wellness", "mentalhealth"],
  //   readTime: 4
  // },
  // {
  //   id: 8,
  //   title: "Mastering CSS Grid: A Complete Guide",
  //   author: "Robert Taylor",
  //   authorAvatar: "https://i.pravatar.cc/50?img=8",
  //   content: "CSS Grid is a powerful layout system that simplifies complex web designs. Learn how to use it like a pro...",
  //   likes: 245,
  //   comments: 39,
  //   shares: 76,
  //   category: "Web Design",
  //   isPublished: true,
  //   createdAt: "2026-06-14T10:00:00Z",
  //   tags: ["css", "webdesign", "frontend"],
  //   readTime: 10
  // },
  // {
  //   id: 9,
  //   title: "The Rise of Remote Work: Lessons Learned",
  //   author: "Maria Garcia",
  //   authorAvatar: "https://i.pravatar.cc/50?img=9",
  //   content: "Three years into the remote work revolution, companies and employees have learned valuable lessons about productivity and work-life balance...",
  //   likes: 467,
  //   comments: 83,
  //   shares: 156,
  //   category: "Career",
  //   isPublished: true,
  //   createdAt: "2026-06-13T07:30:00Z",
  //   tags: ["remotework", "career", "productivity"],
  //   readTime: 6
  // },
  // {
  //   id: 10,
  //   title: "Building Your First Mobile App with React Native",
  //   author: "Alex Turner",
  //   authorAvatar: "https://i.pravatar.cc/50?img=10",
  //   content: "React Native allows you to build native mobile apps using JavaScript. Follow this step-by-step tutorial to build your first app...",
  //   likes: 312,
  //   comments: 47,
  //   shares: 88,
  //   category: "Programming",
  //   isPublished: false,
  //   createdAt: "2026-06-12T15:20:00Z",
  //   tags: ["reactnative", "mobile", "javascript"],
  //   readTime: 12
  // }
  // ];


   

  return (
    // <div className='grid  grid-cols-4 gap-4 ml-3 mr-3 mt-3  '>
    //    {/* {
    //     userComponent
    //    } */}



    //    {/* {
    //     details.map((user) =>(
    //       <Details name = {user.name} age = {user.age} city = {user.city}/>
    //     ))
    //    } */}



    //    {/* {
    //     details.map((user,index) =>(
    //       <Details key ={index} name = {user.name} age = {user.age} city = {user.city}/>
    //     ))
    //    } */}


    //    {/* {
    //     <ShowDetails/>
    //    } */}
 
    //     {
    //       posts.map((post) => (
    //       <PostDetails key = {post.id} authorAvatar = {post.authorAvatar} author = {post.author} createdAt = {post.createdAt} title = {post.title} content = {post.content} likes = {post.likes} comments = {post.comments} category = {post.category} tags = {post.tags}/>
    //     ))
    //     }

    // </div>
    <div>

      {/* {
        <Counter/>
      } */}

        {/* {
          <Fruit/>
        } */}

        {
          <Form/>
        }

{/* 
        {
          <Age age = {90}/>
        } */}


        {/* {
          <RandomNumberGenerator/>
        } */}
    </div>
  )
}
 