"use client"
import { Partner } from '@/app/lib/definitions';
import React, { ChangeEvent, useState } from 'react';
import Select from 'react-select';

const MultiSelect = ({ partners }: { partners: Partner[] }) => {
    const [selectedValues, setSelectedValues] = useState<string[]>([]);

    const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        setSelectedValues(selectedOptions);
    };

    const options = partners.map(partner => ({
        value: partner.id,
        label: partner.name
    }))

    return (
        <>
            <Select id="partner"
                name="partner"
                isMulti
                options={options}
                aria-describedby="name-error"
                required
                className="w-full h-9  bg-gray-200 rounded-lg border border-neutral-200 p-2"
                />
        </>

    );
};

export default MultiSelect;