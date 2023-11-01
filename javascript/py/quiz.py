# Import library
import random

# Question and answer options
questions = ['Siapa presiden pertama Indonesia?', 'Siapa tokoh pahlawan dalam sejarah Indonesia?', 'Apa nama ibukota Indonesia?']
options = [['Soekarno', 'Joko Widodo', 'Susilo Bambang Yudhoyono'], ['Jenderal Sudirman', 'Kartini', 'Bung Tomo'], ['Jakarta', 'Surabaya', 'Bandung']]
answers = ['Soekarno', 'Jenderal Sudirman', 'Jakarta']

# Randomize questions and answer options
random_questions = random.sample(questions, len(questions))
random_options = []
for option in options:
    random_options.append(random.sample(option, len(option)))

# Display the quiz
quiz_text = ''
for i in range(len(random_questions)):
    quiz_text += '{}\n'.format(random_questions[i])
    for j in range(len(random_options[i])):
        quiz_text += '{}. {}\n'.format(j+1, random_options[i][j])
    quiz_text += '\n'

print(quiz_text)

# Check answers
correct_answers = 0
for i in range(len(answers)):
    user_answer = input('Pilih jawaban untuk pertanyaan {}: '.format(i+1))
    if user_answer.lower() == answers[i].lower():
        correct_answers += 1

# Display the result
result_text = 'Hasil kuis:\nJumlah pertanyaan benar: {}\nJumlah pertanyaan salah: {}'.format(correct_answers, len(answers)-correct_answers)
print(result_text)
