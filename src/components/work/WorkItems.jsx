import React from 'react';

const WorkItems = ({ item, onSelectProject }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.name1}</h3>
      <a name='web'
        href={item.link}
        className="work__button"
        onClick={() => onSelectProject(item)}
      >
        {item.name1} <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;