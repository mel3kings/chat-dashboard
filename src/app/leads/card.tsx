import React from "react";

interface CardData {
  ai_response: string;
  comment: string;
  id: string;
  url: string;
}

interface CardListProps {
  data: CardData[];
}

const CardList: React.FC<CardListProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-2">
      {data.map((item: CardData) => (
        <div key={item.id} className="bg-white rounded-lg shadow-md p-4">
          <p className="text-gray-800">{item.comment}</p>

          {item.ai_response && (
            <>
              <div className="chat chat-end">
                <div className="chat-bubble">{item.ai_response}</div>
              </div>
              <a
                href={`https://reddit.com${item.url}`}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chase Lead
              </a>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardList;
