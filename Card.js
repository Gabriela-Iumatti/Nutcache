import React from 'react';
import { Link } from 'react-router-dom';
import { BiTrash } from 'react-icons/bi';
import UIButton from 'components/UI/Button/Button';
import './Card.css'; 

// list of datas we need from App.js and exported to Card.css
const employeeCard = ({ employee, onClickComments, onClickDelete }) => (
  <div className="employee-card">
    <img
    // alt= image description for the visually impaired
      src={employee.imageUrl}
      alt={employee.name}
      className="employee-card__image"
    />
    <div className="employee-card__info">
      <h1 className="employee-card__name">{employee.name}</h1>
      <span className="employee-card__CPF"> {employee.CPF}</span>
      <footer className="employee-card__footer">
        {employee.comments.length > 0 && (
          <div className="employee-card__comment">
            "{employee.comments[0].comment}"
          </div>
        )}
        <button
          className="employee-card__comments-count"
          onClick={onClickComments}
        >
                      {/*count all comments*/}
          {employee.comments.length}{' '}
           {/*if more them one goes to plural*/}
          {employee.comments.length > 1 ? 'Comment' : 'Comments'}
        </button>
        <UIButton
          component="a"
          /*Destiny link*/
          href={employee.url}
          /*open in another page*/
          target="_blank"
          /*safe propriety for _blank*/
          rel="noopener noreferrer"
        >
          Goes to site
        </UIButton>
        <UIButton
          component={Link}
          to={`/edit/${employee.id}`}
          className="employee-card__edit-button"
        >
          Edit
        </UIButton>
      </footer>
      <button
        type="button"
        className="employee-card__delete-button"
        onClick={onClickDelete}
      >
        <BiTrash />
      </button>
    </div>
  </div>
);

export default employeeCard;