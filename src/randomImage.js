import i1 from "./assets/1.jpg";
import i2 from "./assets/2.jpg";
import i3 from "./assets/3.jpg";
import i4 from "./assets/4.jpg";
import i5 from "./assets/5.jpg";
import i6 from "./assets/6.jpg";
import i7 from "./assets/7.jpg";
import i8 from "./assets/8.jpg";
import i9 from "./assets/9.jpg";
import i10 from "./assets/10.jpg";
import i11 from "./assets/11.jpg";
import Counter from "./Counter";

const RandomImage = () => {
  const imagenes = [i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11];
  const imagenRandom = imagenes[Math.floor(Math.random() * imagenes.length)];

  return (
    <div className="grid container m-20 gap-2 justify-center">
      <img className="flex justify-center" src={imagenRandom} alt="1" />
      <Counter />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white text-5xl font-bold py-2 px-4 rounded"
        onClick={() => window.location.reload(false)}
      >
        New Image
      </button>
    </div>
  );
};

export default RandomImage;
