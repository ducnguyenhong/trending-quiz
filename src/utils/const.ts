import { Question } from '@/types/question.type';

export const QUESTION_LIST: Question[] = [
  {
    id: '1',
    question: `<p><strong>Việc tập luyện trong thi đấu thể thao luôn được các vận động viên đặt lên hàng đầu. Và đặc biệt trong bóng đá, các cầu thủ phải luôn duy trì việc tập luyện thường xuyên. Cũng vì vậy đa số họ đều sở hữu một cơ thể khỏe mạnh, săn chắc, 6 múi. Tuy nhiên mỗi có cầu thủ lại sở hữu cơ thể với thể chất riêng biệt nhau. Đoạn thơ sau đây nhắc tới cầu thủ 6 múi nào?</strong></p><p><strong><br></strong></p><p style=\"text-align: center\">\"Sáu múi nhìn quá là ưng<br>Chụp đăng phây búc quá chừng ngợi ca<br>Một mình chống lại FIFA<br>Tấm gương liêm khiết như là Bao Công\"</p><p style=\"text-align: right\"><br></p><p style=\"text-align: right; font-style: italic\">Trích \"Túc Cầu Thanh Thiên\"</p>`,
    answers: [
      {
        content: 'Mohamed Satij',
        isCorrect: true,
        explain: 'BBB'
      },
      {
        content: 'Kim Ri Cha',
        isCorrect: true,
        explain: 'BBB'
      },
      {
        content: 'Long Ma Bắc Giang',
        isCorrect: true,
        explain: 'BBB'
      },
      {
        content: 'Hà Duy Kiên',
        isCorrect: true,
        explain: 'BBB'
      }
    ]
  }
];
