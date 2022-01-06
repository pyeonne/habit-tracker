import React from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

const habits = ({
    habits,
    onIncrement,
    onDecrement,
    onDelete,
    onAdd,
    onReset,
}) => {
    const handleAdd = name => {
        onAdd(name);
    };

    return (
        <div>
            <HabitAddForm onAdd={handleAdd} />
            <ul>
                {habits.map(habit => (
                    <Habit
                        key={habit.id}
                        habit={habit}
                        onIncrement={onIncrement}
                        onDecrement={onDecrement}
                        onDelete={onDelete}
                    />
                ))}
            </ul>
            <button className="habits-reset" onClick={onReset}>
                Reset All
            </button>
        </div>
    );
};

export default habits;
