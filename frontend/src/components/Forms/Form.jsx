import React from 'react'

const Form = () => {
    return (
        <div>
            <div className=" flex items-center justify-center">
                <form id="form" className="bg-cyan-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <h1 className="block text-pink-400 font-bold mb-2 text-xl text-center">Search Here For Best Vehicles</h1>
                    <br />
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Vehicle Type🚗
                        </label>
                        <select name="vehicle" id="" class="form-control form-control-md" className="text-blue-900" required="">
                            <option value="1" >Car</option>
                        </select>
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Select Your City🏙️
                        </label>
                        <select name="city" id="" class="form-control form-control-md" className="text-blue-900" required="">
                            <option value="" >---Select City---</option>
                            <option value="1" >Bhubaneswar</option>
                            <option value="2" >Cuttack</option>
                            <option value="3" >Puri</option>
                        </select>
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Date">
                            Picking Up Date🗓️
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="date" id="date" type="date" placeholder="Ingresa tu Fecha de Nacimiento" required />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Picking Up Hour🕗
                        </label>
                        <select name="time" id="" class="form-control form-control-md" className="text-blue-900" required="">
                            <option value="" >---Select time---</option>
                            <option value="07:00"> 07:00 AM</option>
                            <option value="08:00"> 08:00 AM</option>
                            <option value="09:00"> 09:00 AM</option>
                            <option value="10:00"> 10:00 AM</option>
                            <option value="11:00"> 11:00 AM</option>
                            <option value="12:00"> 12:00 PM</option>
                            <option value="13:00"> 13:00 PM</option>
                            <option value="14:00"> 14:00 PM</option>
                            <option value="15:00"> 15:00 PM</option>
                            <option value="16:00"> 16:00 PM</option>
                            <option value="17:00"> 17:00 PM</option>
                            <option value="18:00"> 18:00 PM</option>
                            <option value="19:00"> 19:00 PM</option>
                            <option value="20:00"> 20:00 PM</option>
                            <option value="21:00"> 21:00 PM</option>
                            <option value="22:00"> 22:00 PM</option>
                            <option value="23:00"> 23:00 PM</option>
                        </select>
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="Date">
                            Dropping Up Date🗓️
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name="date" id="date" type="date" placeholder="Ingresa tu Fecha de Nacimiento" required />
                    </div>


                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Dropping Up Hour🕗
                        </label>
                        <select name="time" id="" class="form-control form-control-md" className="text-blue-900" required="">
                            <option value="" >---Select time---</option>
                            <option value="07:00"> 07:00 AM</option>
                            <option value="08:00"> 08:00 AM</option>
                            <option value="09:00"> 09:00 AM</option>
                            <option value="10:00"> 10:00 AM</option>
                            <option value="11:00"> 11:00 AM</option>
                            <option value="12:00"> 12:00 PM</option>
                            <option value="13:00"> 13:00 PM</option>
                            <option value="14:00"> 14:00 PM</option>
                            <option value="15:00"> 15:00 PM</option>
                            <option value="16:00"> 16:00 PM</option>
                            <option value="17:00"> 17:00 PM</option>
                            <option value="18:00"> 18:00 PM</option>
                            <option value="19:00"> 19:00 PM</option>
                            <option value="20:00"> 20:00 PM</option>
                            <option value="21:00"> 21:00 PM</option>
                            <option value="22:00"> 22:00 PM</option>
                            <option value="23:00"> 23:00 PM</option>
                        </select>
                    </div>



                    <div className="flex items-center justify-between">
                        <button
                            // data-aos="fade-up"
                            // data-aos-delay="1500"
                            onClick={() => {
                                AOS.refreshHard();
                            }}
                            className="rounded-md bg-orange-500 hover:bg-green-900 transition duration-500 py-2 px-6 text-black"
                        >
                            Get Started👆
                        </button>
                    </div>
                    <div className="mb-4">
                    </div></form>
            </div>
        </div>

    )
}

export default Form
