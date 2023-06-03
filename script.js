var currentIndex = 0 // Переменная для отслеживания текущего индекса глагола

function shuffleVerbs() {
   var verbsContainer = document.getElementById('verbsContainer')
   verbsContainer.innerHTML = ''

   shuffleArray(verbs)

   var verbDiv = document.createElement('div')
   var verb = verbs[currentIndex].verb
   verbDiv.textContent = verb
   verbDiv.addEventListener('click', showTranslation)
   verbsContainer.appendChild(verbDiv)

   var translationDiv = document.createElement('div') // Элемент для отображения перевода
   translationDiv.setAttribute('id', 'translation')
   verbsContainer.appendChild(translationDiv)

   currentIndex++ // Увеличиваем индекс для отображения следующего глагола
   if (currentIndex >= verbs.length) {
      currentIndex = 0 // Если достигли конца массива, переходим на первый глагол
   }
}

function showTranslation(event) {
   var verbDiv = event.target
   var verb = verbDiv.textContent

   var translationDiv = document.getElementById('translation')
   translationDiv.textContent = '' // Очищаем содержимое перевода

   for (var i = 0; i < verbs.length; i++) {
      if (verbs[i].verb === verb) {
         var translation = verbs[i].translation
         translationDiv.textContent = translation // Отображаем перевод рядом с глаголом
         break
      }
   }
}

function shuffleArray(array) {
   for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1))
      var temp = array[i]
      array[i] = array[j]
      array[j] = temp
   }
   return array
}
