import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [unlocked, setUnlocked] = useState(false);
  const [dateInput, setDateInput] = useState('');
  const [error, setError] = useState(false);

  const correctDate = '22.02.2025';

  const handleSubmit = () => {
    if (dateInput === correctDate) {
      setError(false);
      setUnlocked(true);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-50 to-orange-50">
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animation: `twinkle ${Math.random() * 3 + 2}s infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {!unlocked ? (
        <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
          <div
            className="max-w-md w-full text-center space-y-8"
            style={{ animation: 'fadeIn 1s ease-out' }}
          >
            <div
              className="inline-block text-8xl mb-4"
              style={{ animation: 'float 3s ease-in-out infinite' }}
            >
              💌
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-rose-600 mb-4">
                Для самой любимой
              </h1>
              <p className="text-xl text-rose-500 font-light">
                Чтобы открыть моё сердце, вспомни нас...
              </p>
            </div>

            <div className="space-y-4 mt-8">
              <p className="text-lg text-rose-600 font-medium">
                Введи дату нашего первого поцелуя
              </p>
              <p className="text-sm text-rose-400">(формат: ДД.ММ.ГГГГ)</p>

              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="22.02.2025"
                  value={dateInput}
                  onChange={(e) => setDateInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                  className={`text-center text-xl py-6 bg-white/80 backdrop-blur border-2 ${
                    error ? 'border-red-400 animate-[heartbeat_0.5s_ease-in-out]' : 'border-rose-300'
                  } focus:border-rose-400 focus:ring-rose-400`}
                />
                {error && (
                  <p className="text-red-500 text-sm">
                    Попробуй вспомнить ещё раз... 💕
                  </p>
                )}
                <Button
                  onClick={handleSubmit}
                  className="w-full py-6 text-lg bg-gradient-to-r from-rose-400 to-orange-400 hover:from-rose-500 hover:to-orange-500 text-white shadow-lg"
                  style={{ animation: 'glow 2s ease-in-out infinite' }}
                >
                  Открыть письмо
                  <Icon name="Heart" className="ml-2" size={20} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div
          className="relative z-10 min-h-screen flex items-center justify-center p-4"
          style={{ animation: 'fadeIn 1.5s ease-out' }}
        >
          <div className="max-w-2xl w-full text-center space-y-8">
            <div
              className="inline-block text-8xl mb-4"
              style={{ animation: 'heartbeat 1.5s ease-in-out infinite' }}
            >
              ❤️
            </div>

            <div
              className="space-y-6"
              style={{ animation: 'slideUp 1s ease-out 0.3s both' }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-rose-600 mb-6">
                Моя любимая
              </h1>

              <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-rose-200">
                <p className="text-2xl md:text-3xl text-rose-700 leading-relaxed font-light mb-6">
                  С того самого дня, когда наши губы встретились впервые, моё
                  сердце принадлежит только тебе.
                </p>
                <p className="text-xl md:text-2xl text-rose-600 leading-relaxed font-light mb-6">
                  Каждый рассвет с тобой — это новая страница нашей истории.
                  Каждый вечер — это благодарность за то, что ты рядом.
                </p>
                <p className="text-xl md:text-2xl text-rose-600 leading-relaxed font-light">
                  Ты — моё вдохновение, моя радость, мой дом. Ты — моя любовь.
                </p>
              </div>

              <div
                className="pt-6"
                style={{ animation: 'slideUp 1s ease-out 0.6s both' }}
              >
                <p className="text-3xl md:text-4xl font-bold text-rose-700">
                  Я люблю тебя.
                </p>
                <p className="text-xl md:text-2xl text-rose-500 font-light mt-2">
                  Сегодня, завтра, всегда.
                </p>
              </div>

              <div
                className="flex justify-center gap-3 pt-4"
                style={{ animation: 'slideUp 1s ease-out 0.9s both' }}
              >
                {['💕', '✨', '🌹', '✨', '💕'].map((emoji, i) => (
                  <span
                    key={i}
                    className="text-3xl"
                    style={{
                      animation: `float 2s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`,
                    }}
                  >
                    {emoji}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-rose-200/50 to-transparent pointer-events-none" />
    </div>
  );
};

export default Index;