import React from "react";
import Background from "../component/Background";

const dataProject = [
  {
    banner: "MachineLearning",
    title: "Pneumonia Detection",
    url: "https://github.com/ivandwinugraha/cbir-flaskcnn",
    image: "/bapak1.jpg",
    text: "Pada project ini, diagnosis Covid-19 didasari pada pemeriksaan dan evaluasi dengan computed tomograhpy (CT) dan chest x-ray(CXR) Pemeriksaan dan evaluasi menggunakan citra medis adalah pendekatan yang digunakan untuk mendiagnosis corona(COVID-19),dimana menggunakan gambar chest x-ray(CXR) diusulkan dengan beberapa metode untuk mendeteksi pneumonia sebagai gejala covid-19. Model yang digunakan adalah 2 layer CNN. Aplikasi ini mengunakan web framework flask lalu menggunakan heroku.",
  },
  {
    banner: "MachineLearning",
    title: "Pneumonia Detection",
    url: "https://github.com/ivandwinugraha/cbir-flaskcnn",
    image: "/bapak2.jpg",
    text: "Tujuan penelitian ini penelitian kami adalah untuk mengembangkan dan mengoptimalkan penelitian sebelumnya menggunakan metode yang berbeda yakni LSTM-RNN, dan mendeteksi depresi pada tweet twitter indonesia. Dataset yang digunakan berjumlah 5.494 baris tweet, dimana data kelas normal berjumlah 2.747 baris tweet dan data depresi berjumlah 2.747 baris tweet setelah dilakukan balancing data, dataset sebelum digunakan data dilakukan proses preprocessing terlebih dahulu sebelum masuk ke proses pelatihan. Hasil dari penelitian dengan menggunakan metode LSTM-RNN memperoleh nilai presisi, recall, dan F1-score diperoleh masing-masing 86%, 86%, dan 86%, sedangkan akurasinya adalah 86%. Sistem deteksi ujaran depresi diharapkan dapat membantu menganalisa depresi masyarakat di media sosial.",
  },
  {
    banner: "MachineLearning",
    title: "Rice Leaf Diseases Detection",
    url: "https://github.com/ivandwinugraha/cbir-flaskcnn",
    image: "/bapak3.jpeg",
    text: "Pada project ini, diagnosis Covid-19 didasari pada pemeriksaan dan evaluasi dengan computed tomograhpy (CT) dan chest x-ray(CXR) Pemeriksaan dan evaluasi menggunakan citra medis adalah pendekatan yang digunakan untuk mendiagnosis corona(COVID-19),dimana menggunakan gambar chest x-ray(CXR) diusulkan dengan beberapa metode untuk mendeteksi pneumonia sebagai gejala covid-19. Model yang digunakan adalah 2 layer CNN. Aplikasi ini mengunakan web framework flask lalu menggunakan heroku.",
  },
  {
    banner: "MachineLearning",
    title: "Deteksi Depresi Pada Tweat",
    url: "https://github.com/ivandwinugraha/cbir-flaskcnn",
    image: "/bapak4.jpeg",
    text: "Pada project ini, diagnosis Covid-19 didasari pada pemeriksaan dan evaluasi dengan computed tomograhpy (CT) dan chest x-ray(CXR) Pemeriksaan dan evaluasi menggunakan citra medis adalah pendekatan yang digunakan untuk mendiagnosis corona(COVID-19),dimana menggunakan gambar chest x-ray(CXR) diusulkan dengan beberapa metode untuk mendeteksi pneumonia sebagai gejala covid-19. Model yang digunakan adalah 2 layer CNN. Aplikasi ini mengunakan web framework flask lalu menggunakan heroku.",
  },
]

const Project = () => {
  return (
    <>
      <div className="justify-center relative z-10 h-[100%] w-[100%] flex flex-col items-center px-[5%] ">

        <div className="grid md:grid-cols-2 grid-cols-1 w-[100%] md:h-[100%] h-auto md:gap-4 m-4">

          {/* kiri */}
          <div className="w-full flex flex-col md:pl-[20%] space-y-4 justify-center items-center py-5">
            <div className="hover:scale-[103%] duration-300 md:h-[350px] md:w-[350px] h-[200px] w-[200px] shadow shadow-xl rounded-full flex items-center justify-center overflow-hidden">
              <img className="md:scale-[250%] scale-[150%]" alt="error" src="/ivan.jpg" />
            </div>
          </div>

          {/* kanan */}
          <div className="w-full pt-4 flex flex-col md:pr-[20%] space-y-4 justify-center md:items-start items-center text-black">
            <div className="space-y-1 font-bold md:text-2xl text-lg">
              {/* <p><span className="text-orange-500"></span>, my name is</p> */}
              <h1 className="text-4xl md:text-6xl md:pb-2">
                <span className="text-orange-500">This is,</span>
                <span className="text-black-500 ">my project</span>
              </h1>
            </div>
            <p className="md:text-base text-sm">Berikut daftar proyek yang pernah saya kerjakan. Proyek </p>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="relative z-10 w-[100%] flex flex-col items-center px-[5%] pb-14">

        <div className="grid md:grid-cols-2 grid-cols-1 h-full w-full gap-4">

          {dataProject.map((user, idx) => (
            <div className="bg-white md:h-80 h-40 w-full flex justify-between rounded-lg overflow-hidden shadow-lg" key={idx}>
              <div className="flex flex-col justify-between text-black w-full">

                <div className="md:p-4 px-2 pt-2">
                  <p className="text-gray-400 md:text-base text-xs">#{user.banner}</p>
                  <h1 className="md:text-3xl text-base font-bold">{user.title}</h1>
                </div>

                <div className="md:text-base text-xs md:px-4 px-2 overflow-y-scroll scrollbar-hide md:max-h-[120px] max-h-[60px]">
                  <p>{user.text}</p>
                </div>
                <div className="w-full h-32 md:pt-5 pt-3">
                  <button href={user.url} className="bg-[#4A596C] px-5 rounded-r-full py-1 md:py-1.5 text-white md:text-sm text-xs hover:bg-orange-900 duration-300">
                    Open it
                  </button>
                </div>
              </div>
              <div className="h-full md:w-80 w-40">
                <img className="h-full w-full object-cover" alt="error" src={user.image} />
              </div>
            </div>
          ))}


        </div>

      </div>
      <Background />
    </>
  );
}

export default Project;
