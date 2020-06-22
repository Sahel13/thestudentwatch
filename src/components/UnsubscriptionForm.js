import React from "react"

import styled from "@emotion/styled"
import { css } from "@emotion/core"

class SubscriptionForm extends React.Component {
  state = {
    email: "",
  }
  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    alert(`You have successfully subscribed with the email ${this.state.email}.`)

    const data = new FormData(event.target);
    fetch("https://script.google.com/macros/s/AKfycbz9MC60KNtRx2q0F5u2E_tom_3Dp2ODTEiMHogFf5me8IdzqRES/exec", {
      method: 'POST',
      body: data,
    });
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit} css={css`text-align: center;`}>
          <input
            type="email"
            name="email"
            aria-label="Email"
            placeholder="Email"
            value={this.state.firstName}
            onChange={this.handleInputChange}
          />
        <SubscribeButton type="submit">Unsubscribe</SubscribeButton>
      </form>
    )
  }
}

const SubscribeButton = styled.button`
  color: white;
  background-color: black;
  border: none;
  margin: 1rem;
  padding: 5px 10px;
`

export default SubscriptionForm