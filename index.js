const element = (
  // Write your code here.

  <div className='inside-container'>
    <img
      src='https://assets.ccbp.in/frontend/react-js/congrats-card-bg.png'
      className='bg-img'
    />
    <h1 className='heading'>Congratulations</h1>
    <div className='box'>
      <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png' />
      <h3>Kiran V</h3>
      <p>Vishnu Institute Of Computer Education and Technology, Bhimavaram</p>
      <img src='https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
