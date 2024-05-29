
//Technical Assessment - Task 02
//Muhammad Talal Majeed
import React from 'react';

//Using FireEvent to Simulate Click Events
import { render, screen, fireEvent } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import BlogPost from './BlogPost';

//Importing Act from React (Updated in Latest Versions of React)
import { act } from 'react';


describe('BlogPost Component', () => {
    const post = {
        title: 'Test Post',
        content: 'This is a test post.',
        author: 'John Doe',
    };

    test('renders the BlogPost component', () => {
        //Wrapping the Render Function in Act (Due to Compatibility with Latest Versions of React)
        act(() => {
            render(<BlogPost post={post} />);
        });

        //Already Functioning Test Cases
        expect(screen.getByText('Test Post')).toBeInTheDocument();
        expect(screen.getByText('This is a test post.')).toBeInTheDocument();
        expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    test('calls the edit function when the Edit button is clicked', () => {
        const mockEdit = jest.fn();

        act(() => {
            render(<BlogPost post={post} onEdit={mockEdit} />);
        });

        //Requesting the Button and Clicking it
        const editButton = screen.getByTestId('edit-button');

        //FireEvent to Simulate Click Event
        fireEvent.click(editButton);
        expect(mockEdit).toHaveBeenCalled();
    });

    test('calls the delete function when the Delete button is clicked', () => {
        const mockDelete = jest.fn();

        act(() => {
            render(<BlogPost post={post} onDelete={mockDelete} />);
        });

        //Requesting the Button and Clicking it
        const deleteButton = screen.getByTestId('delete-button');

        //FireEvent to Simulate Click Event
        fireEvent.click(deleteButton);
        expect(mockDelete).toHaveBeenCalled();
    });
});
