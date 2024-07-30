import { Question } from '@/types/question.type';

export const QUESTION_LIST: Question[] = [
  {
    id: '1',
    question: `<p><strong>Đoạn thơ sau đây nhắc tới cầu thủ liêm khiết nào?</strong></p><p><strong><br></strong></p><p style=\"text-align: center\">\"Sáu múi nhìn quá là ưng<br>Chụp đăng phây búc quá chừng ngợi ca<br>Một mình chống lại FIFA<br>Tấm gương liêm khiết như là Bao Công\"</p><p style=\"text-align: right\"><br></p><p style=\"text-align: right; font-style: italic\">Trích \"Túc Cầu Thanh Thiên\"</p>`,
    answers: [
      {
        content: 'Mohamed Satij',
        isCorrect: false,
        explain: 'Danh hiệu liêm khiết không thuộc về cầu thủ này'
      },
      {
        content: 'Kim Ri Cha',
        isCorrect: true,
        explain:
          'Kim Ri Cha (7 chọ) được xem là cầu thủ liêm khiết nhất trong lịch sử bóng đá. Bài thơ "Túc Cầu Thanh Thiên" chính là nói về cầu thủ này'
      },
      {
        content: 'Anthony Compa',
        isCorrect: false,
        explain: 'Danh hiệu liêm khiết không thuộc về cầu thủ này'
      },
      {
        content: 'Hà Duy Kiên',
        isCorrect: false,
        explain: 'Danh hiệu liêm khiết không thuộc về cầu thủ này'
      }
    ]
  },
  {
    id: '2',
    question: `<p><strong>2Đoạn thơ sau đây nhắc tới cầu thủ liêm khiết nào?</strong></p><p><strong><br></strong></p><p style=\"text-align: center\">\"Sáu múi nhìn quá là ưng<br>Chụp đăng phây búc quá chừng ngợi ca<br>Một mình chống lại FIFA<br>Tấm gương liêm khiết như là Bao Công\"</p><p style=\"text-align: right\"><br></p><p style=\"text-align: right; font-style: italic\">Trích \"Túc Cầu Thanh Thiên\"</p>`,
    answers: [
      {
        content: 'Mohamed Satij',
        isCorrect: false,
        explain: 'Danh hiệu liêm khiết không thuộc về cầu thủ này'
      },
      {
        content: 'Kim Ri Cha',
        isCorrect: true,
        explain:
          'Kim Ri Cha (7 chọ) được xem là cầu thủ liêm khiết nhất trong lịch sử bóng đá. Bài thơ "Túc Cầu Thanh Thiên" chính là nói về cầu thủ này'
      },
      {
        content: 'Anthony Compa',
        isCorrect: false,
        explain: 'Danh hiệu liêm khiết không thuộc về cầu thủ này'
      },
      {
        content: 'Hà Duy Kiên',
        isCorrect: false,
        explain: 'Danh hiệu liêm khiết không thuộc về cầu thủ này'
      }
    ]
  }
];
