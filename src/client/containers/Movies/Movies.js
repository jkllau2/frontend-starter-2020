import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userActions } from '../../redux/actions'
// import Button from '../../components/Button/Button'
import { Header, Table, Button, Container } from 'semantic-ui-react'

class Movies extends Component {
  handleOnClick = () => {
    const payload = {
      peopleId: 1
    }
    const { fetchMovieData } = this.props
    fetchMovieData(payload)
  }

  renderTable(data) {
    if (!data) return null
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            {Object.keys(data).map((key, idx) => <Table.HeaderCell key={idx}>{key}</Table.HeaderCell>)}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            {Object.values(data).map((val, idx) => <Table.Cell key={idx}>{val}</Table.Cell>)}
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }

  render() {
    const { movieData } = this.props
    return (
      <Container>
        <Header size='large'>Movies Dashboard</Header>
        {this.renderTable(movieData)}
        <Button
          primary
          onClick={() => this.handleOnClick()}
        >
          Go
        </Button>
      </Container>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  fetchMovieData: (...args) => dispatch(userActions.update(...args))
})

const mapStateToProps = state => ({
  isLoading: state.userReducers.isLoading,
  movieData: state.userReducers.data
})

export default connect(mapStateToProps, mapDispatchToProps)(Movies)
