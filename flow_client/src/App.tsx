function App() {
  return (
    <>
      <div className="flex justify-center mt-4">
        <h1 className="text-2xl font-semibold text-primary">Flow Living</h1>
      </div>
    </>
    /* 
     I normally import my routes and Layout files here but this time i was trying out the
     new routers that support data apis that prefetch data from the server before rendering a 
     new route page but i ended not finishing the implementation because react query was fast enough.
     I just added this flow footer here just to leave something here...feels weird to live the app file 
     empty😂
    */
  );
}

export default App;
