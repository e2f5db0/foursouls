import React from 'react'
import { ADD_VOTE, GET_SPLITTED_LIST, GET_VOTE_STATE } from '../queries/queries'
import { useMutation } from '@apollo/client'

const ChoiceButton = ({ type, side, Cookies, voterCount, votes, setVotedCookie }) => {

  const [launchVote] = useMutation(ADD_VOTE, {
    refetchQueries: [{ query: GET_SPLITTED_LIST }, { query: GET_VOTE_STATE }]
  })

  const handleClick = () => {
    if (side === 'left') {
      if (votes === voterCount - 1) {
        Cookies.remove('voted')
        setVotedCookie(undefined)
      }
      launchVote({ variables: { vote: 0 } })
    }
    if (side === 'right') {
      if (votes === voterCount - 1) {
        Cookies.remove('voted')
        setVotedCookie(undefined)
      }
      launchVote({ variables: { vote: 1 } })
    }
    Cookies.set('voted', true, { sameSite: 'lax' })
    setVotedCookie(Cookies.get('voted'))
  }

  return (
    <div>
      {side === 'left' && <button className={type} onClick={() => handleClick()}>Vasen</button>}
      {side === 'right' && <button className={type} onClick={() => handleClick()}>Oikea</button>}
    </div>
  )
}

export default ChoiceButton
