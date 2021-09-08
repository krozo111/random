const unsplashimg = {
  
  src: "https://source.unsplash.com/800x600/?animal",
  alt: "random unsplash image",
};

function App() {
  return (
    <>
      <div className="container mx-20 my-10 flex justify-center">
        <img className="" src={unsplashimg.src} alt={unsplashimg.alt} />
      </div>
      <h1 className="text-center">
        Random <a href="https://unsplash.com">Unsplash</a> Image
      </h1>
      <p className="text-center">
        Reload or Click on Run to see a different image actualizado en win again noche 8
      </p>
    </>
  );
}

export default App;
