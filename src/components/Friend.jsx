import Button from './Button'

export default function Friend({ friend, onSelected, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          {friend.name} に支払う金額: {Math.abs(friend.balance)} 円
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name}があなたに払う金額: {Math.abs(friend.balance)} 円
        </p>
      )}
      {friend.balance === 0 && <p>割り勘が完了しています</p>}

      <Button onClick={() => onSelected(friend)}>
        {isSelected ? "閉じる" : "選択"}
      </Button>
    </li>
  );
}