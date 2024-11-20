import { Cloud, Map, Fish, BookOpen, Calendar, ChevronRight } from 'lucide-react'
import { Button } from "../components/ui/button"
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent 
} from "../components/ui/card"

export default function Home() {
  const features = [
    {
      icon: Cloud,
      title: "天候・潮汐情報",
      description: "リアルタイムの天気と潮の満ち引き情報をチェック",
      color: "text-blue-500"
    },
    {
      icon: Map,
      title: "釣りスポット",
      description: "人気の釣り場所と最新の釣果情報",
      color: "text-green-500"
    },
    {
      icon: Fish,
      title: "魚種図鑑",
      description: "季節ごとの魚の特徴と釣り方ガイド",
      color: "text-cyan-500"
    },
    {
      icon: Calendar,
      title: "釣果記録",
      description: "あなたの釣果を記録して共有",
      color: "text-purple-500"
    },
    {
      icon: BookOpen,
      title: "釣りの基礎知識",
      description: "初心者から上級者まで役立つ情報",
      color: "text-orange-500"
    }
  ]

  return (
    <div className="min-h-screen">
      {/* ヒーローセクション */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            あなたの釣りライフを、もっと楽しく
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            天候チェックから釣果記録まで、必要な情報をこのアプリ1つで
          </p>
          <Button className="text-lg px-8 py-6" size="lg">
            はじめる
            <ChevronRight className="ml-2" />
          </Button>
        </div>
      </section>

      {/* 機能カードセクション */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="bg-white/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                  <CardTitle className="mt-4">{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="mt-2">
                    詳しく見る
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}