// import React from 'react'

// export default function UserDetails(props) {
//     const {id, name, username, email, street,suite, zipcode, city, geo, lat, lng, phone, website, companyName, catchPhrase, bs} = props;
//     return (
//         <div className='bg-white p-6 rounded-xl border border-gray-200 hover:shadow-2xl w-96 shadow-lg transition-all duration-300 hover:scale-105'> 
//                 <h3 className='text-center text-blue-600 font-bold text-2xl mb-4'>{id}. {name}</h3>
//                 <h4 className='font-semibold'>Username : {username}</h4>
//                 <h4 className='font-semibold'>Email : {email}</h4>
//                 <h4 className='font-bold text-lg text-purple-600 pb-1'>Address : </h4>
//                 <h5 className='pl-4 font-medium mt-2 space-y-2'>street  : {street}</h5>
//                 <h5 className='pl-4 font-medium mt-2 space-y-2'>suite : {suite}</h5>
//                 <h5 className='pl-4 font-medium mt-2 space-y-2'>zipcode : {zipcode}</h5>
//                 <h5 className='pl-4 font-medium mt-2 space-y-2'>City : {city}</h5>
//                 <h5 className='pl-4 font-medium mt-2 space-y-2'>Geo : </h5>
//                 <h6 className='pl-8 text-sm text-gray-600'>Lat : {lat}</h6>
//                 <h6 className='pl-8 text-sm text-gray-600'>Lng : {lng}</h6>
//                 <h4 >Phone : {phone}</h4>
//                 <h4 >Website : {website}</h4>
//                 <h4 >Company :</h4>
//                 <h5 className='pl-10'>Name : {companyName}</h5>
//                 <h5 className='pl-10'>catchPhrase : {catchPhrase}</h5>
//                 <h5 className='pl-10'> bs : {bs}</h5>
//             </div>
       
//     )
// }


import React from 'react'

export default function UserDetails(props) {
  const {
    id, name, username, email,
    street, suite, zipcode, city,
    lat, lng, phone, website,
    companyName, catchPhrase, bs
  } = props;

  return (
    <div className="bg-white  p-6 rounded-xl shadow-lg border border-gray-300 hover:shadow-2xl hover:scale-105 transition-all duration-300 mb-10 ml-5 shadow-blue-200">
      
      <h3 className="text-2xl font-bold text-center text-blue-600 mb-4">
        {id}. {name}
      </h3>

      <div className="space-y-2 text-gray-700">
        <p><span className="font-semibold">Username:</span> {username}</p>
        <p><span className="font-semibold">Email:</span> {email}</p>

        <div className="mt-3">
          <h4 className="font-bold text-lg text-purple-600 pb-1">
            Address
          </h4>

          <div className="pl-4 mt-2 space-y-1">
            <p><span className="font-medium">Street:</span> {street}</p>
            <p><span className="font-medium">Suite:</span> {suite}</p>
            <p><span className="font-medium">Zipcode:</span> {zipcode}</p>
            <p><span className="font-medium">City:</span> {city}</p>

            <div className="pl-4 text-sm text-gray-600">
              <p>Lat: {lat}</p>
              <p>Lng: {lng}</p>
            </div>
          </div>
        </div>

        <p><span className="font-semibold">Phone:</span> {phone}</p>
        <p><span className="font-semibold">Website:</span> {website}</p>

        <div className="mt-3">
          <h4 className="font-bold text-lg text-green-600 pb-1">
            Company
          </h4>

          <div className="pl-4 mt-2 space-y-1">
            <p><span className="font-medium">Name:</span> {companyName}</p>
            <p><span className="font-medium">Catch Phrase:</span> {catchPhrase}</p>
            <p><span className="font-medium">BS:</span> {bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
