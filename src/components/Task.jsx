import React from 'react';
import { formatDistanceToNow, differenceInDays } from 'date-fns';
import { tr } from 'date-fns/locale';

const Task = ({ taskObj, onComplete }) => {
  const remaining = formatDistanceToNow(taskObj.deadline, {
    locale: tr,
    addSuffix: true,
  });
  const diff = differenceInDays(taskObj.deadline, new Date());

  let bgclass = '';

  if (diff < 3) {
    bgclass = 'bg-urgent';
  } else {
    bgclass = 'bg-normal';
  }

  console.log(diff);

  return (
    <div className="p-6 bg-white rounded-md leading-normal mt-4 shadow-[0_4px_5px_0_rgb(0 0 0 / 10%)]">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-xs pt-1">
        son teslim:{' '}
        <span className={`py-1 px-2 rounded-sm inline-block ${bgclass}`}>
          {remaining}
        </span>
      </div>
      <p className="pt-2 pb-3 text-sm text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span
            className="inline-block py-1.5 px-3 text-sm border-2 border-solid border-[#ccc] mr-1 mb-1.5 rounded-[30px]"
            key={p}
          >
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button
          className="block px-3 py-2 ml-auto bg-[#fecc91] shadow-[0_4px_5px_0_rgb(0 0 0 / 5%)] rounded-sm border-0 cursor-pointer"
          onClick={() => onComplete(taskObj.id)}
        >
          Tamamlandı
        </button>
      )}
    </div>
  );
};

export default Task;
