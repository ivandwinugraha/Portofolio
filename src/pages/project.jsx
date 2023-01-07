import React from "react";
import Background from "../component/Background";

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
          <div className="w-full pt-4 flex flex-col md:pr-[20%] space-y-4 justify-center text-black">
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
      <div className="relative z-10 h-[100%] w-[100%] flex flex-col items-center px-[5%] ">

        <div className="grid grid-cols-1 w-[100%] h-[100%] ">

          {/* Atas Center */}
          <div className="w-full pt-4 flex px-[20%] space-y-4 justify-center">
            <div>
              <h1 className='text-orange-500 text-a-2 text-4xl lg:text-6xl font-bold capitalize lg:pb-6 pb-3'> My Project</h1>
            </div>
          </div>

        </div>

        <div className="grid md:grid-cols-2 grid-cols-1 w-[100%] md:h-[100%] h-auto md:gap-4 m-4">

          {/* kiri */}
          <div className="w-full flex flex-col md:pl-[20%] space-y-4 justify-center text-black items-center py-5">

            {/* Pneumonnia */}
            <div>
              <p className='text-black dark:text-black md:text-xl text-sm'>Machine Learning</p>
              <h1 className='text-a-2 text-4xl lg:text-6xl font-bold capitalize lg:pb-6 pb-3'>Pneumonia Detection</h1>
              <p className='text-black dark:text-black text-sm lg:text-xl pb-3'>Pada project ini, diagnosis Covid-19 didasari pada pemeriksaan dan evaluasi dengan computed tomograhpy (CT) dan chest x-ray(CXR) Pemeriksaan dan evaluasi menggunakan citra medis adalah pendekatan yang digunakan untuk mendiagnosis corona(COVID-19),dimana menggunakan gambar chest x-ray(CXR) diusulkan dengan beberapa metode untuk mendeteksi pneumonia sebagai gejala covid-19. Model yang digunakan adalah 2 layer CNN. Aplikasi ini mengunakan web framework flask lalu menggunakan heroku.</p>
              <span>
                <a href="https://github.com/ivandwinugraha/cbir-flaskcnn" type="button" className="px-5 py-1.5 hover:ring ring-blue-500 shadow bg-blue-800 rounded-full hover:bg-blue-900 text-white duration-300">
                  Open it
                </a>
              </span>
            </div>

            {/* Depression Detection */}
            <div>
              <p className='text-black dark:text-black md:text-xl text-sm'>Machine Learning</p>
              <h1 className='text-a-2 text-4xl lg:text-6xl font-bold capitalize lg:pb-6 pb-3'>Rice Leaf Diseases Detection</h1>
              <p className='text-black dark:text-black text-sm lg:text-xl pb-3'>Pada project ini, diagnosis Covid-19 didasari pada pemeriksaan dan evaluasi dengan computed tomograhpy (CT) dan chest x-ray(CXR) Pemeriksaan dan evaluasi menggunakan citra medis adalah pendekatan yang digunakan untuk mendiagnosis corona(COVID-19),dimana menggunakan gambar chest x-ray(CXR) diusulkan dengan beberapa metode untuk mendeteksi pneumonia sebagai gejala covid-19. Model yang digunakan adalah 2 layer CNN. Aplikasi ini mengunakan web framework flask lalu menggunakan heroku.</p>
              <span>
                <a href="https://github.com/ivandwinugraha/cbir-flaskcnn" type="button" className="px-5 py-1.5 hover:ring ring-blue-500 shadow bg-blue-800 rounded-full hover:bg-blue-900 text-white duration-300">
                  Open it
                </a>
              </span>
            </div>

          </div>

          {/* kanan */}
          <div className="w-full flex flex-col md:pl-[20%] space-y-4 justify-center text-black items-center py-5">
            {/* Pneumonnia */}
            <div>
              <p className='text-black dark:text-black md:text-xl text-sm'>Machine Learning</p>
              <h1 className='text-a-2 text-4xl lg:text-6xl font-bold capitalize lg:pb-6 pb-3'>Pneumonia Detection</h1>
              <p className='text-black dark:text-black text-sm lg:text-xl pb-3'>

              Tujuan penelitian ini penelitian kami adalah untuk mengembangkan dan mengoptimalkan penelitian sebelumnya menggunakan metode yang berbeda yakni LSTM-RNN, dan mendeteksi depresi pada tweet twitter indonesia. Dataset yang digunakan berjumlah 5.494 baris tweet, dimana data kelas normal berjumlah 2.747 baris tweet dan data depresi berjumlah 2.747 baris tweet setelah dilakukan balancing data, dataset sebelum digunakan data dilakukan proses preprocessing terlebih dahulu sebelum masuk ke proses pelatihan. Hasil dari penelitian dengan menggunakan metode LSTM-RNN memperoleh nilai presisi, recall, dan F1-score diperoleh masing-masing 86%, 86%, dan 86%, sedangkan akurasinya adalah 86%. Sistem deteksi ujaran depresi diharapkan dapat membantu menganalisa depresi masyarakat di media sosial.

              </p>
              <span>
                <a href="https://github.com/ivandwinugraha/cbir-flaskcnn" type="button" className="px-5 py-1.5 hover:ring ring-blue-500 shadow bg-blue-800 rounded-full hover:bg-blue-900 text-white duration-300">
                  Open it
                </a>
              </span>
            </div>

            {/* Depression Detection */}
            <div>
              <p className='text-black dark:text-black md:text-xl text-sm'>Machine Learning</p>
              <h1 className='text-a-2 text-4xl lg:text-6xl font-bold capitalize lg:pb-6 pb-3'>Deteksi Depresi Pada Tweat</h1>
              <p className='text-black dark:text-black text-sm lg:text-xl pb-3'>Pada project ini, diagnosis Covid-19 didasari pada pemeriksaan dan evaluasi dengan computed tomograhpy (CT) dan chest x-ray(CXR) Pemeriksaan dan evaluasi menggunakan citra medis adalah pendekatan yang digunakan untuk mendiagnosis corona(COVID-19),dimana menggunakan gambar chest x-ray(CXR) diusulkan dengan beberapa metode untuk mendeteksi pneumonia sebagai gejala covid-19. Model yang digunakan adalah 2 layer CNN. Aplikasi ini mengunakan web framework flask lalu menggunakan heroku.</p>
              <span>
                <a href="https://github.com/ivandwinugraha/cbir-flaskcnn" type="button" className="px-5 py-1.5 hover:ring ring-blue-500 shadow bg-blue-800 rounded-full hover:bg-blue-900 text-white duration-300">
                  Open it
                </a>
              </span>
            </div>

          </div>
        </div>



      </div>
      <Background />
    </>
  );
}

export default Project;
