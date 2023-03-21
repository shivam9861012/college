export default function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="w-screen flex p-6 bg-blue-300 gap-6 text-lg font-semibold px-20">
        <div> Home </div>
        <div>About</div>
      </div>
      <div className="flex">
        <div className="w-1/2 flex justify-center h-full">
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
            className="object-cover"
          />
        </div>
        <div className="w-1/2 flex flex-col gap-6 p-12">
          <h2 className="text-2xl font-semibold text-center">Sign Up Here</h2>
          <div className="flex flex-col">
            <label>Email</label>
            <input type="email" className="border-2" />
          </div>

          <div className="flex flex-col">
            <label>Password</label>
            <input type="password" className="border-2" />
          </div>

          <button className="bg-blue-500 p-2 px-10 rounded-lg hover:bg-blue-600 text-white">Sign Up</button>
        </div>
      </div>
    </div>
  );
}
