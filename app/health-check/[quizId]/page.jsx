import { quizzes, quizList } from "@/lib/quiz-data";
import QuizEngine from "@/components/QuizEngine";
import { notFound } from "next/navigation";

// DEĞİŞİKLİK 1: Bileşen fonksiyonunu 'async' yapıyoruz.
export default async function HealthCheckPage({ params }) {
  
  // DEĞİŞİKLİK 2: 'params' bir Promise olduğu için önce await ediyoruz.
  const { quizId } = await params;
  
  // URL'deki ID'ye göre doğru veriyi çekiyoruz
  const quizData = quizzes[quizId];

  // Eğer öyle bir quiz yoksa 404 sayfası
  if (!quizData) {
    return notFound();
  }

  return (
    <div className="w-full min-h-screen bg-white py-12">
        <div className="container max-w-[1200px] mx-auto px-4 md:px-8">
            <QuizEngine quizData={quizData} quizList={quizList} />
        </div>
    </div>
  );
}

// Static Params (Build optimizasyonu için - Opsiyonel ama önerilir)
export async function generateStaticParams() {
  return Object.keys(quizzes).map((quizId) => ({
    quizId: quizId,
  }));
}