import { Card, Button } from "react-bootstrap";
import { useState } from "react";
import { patchInc, patchDec } from "../utils/api";

const Vote = ({ votes, article_id }) => {
  const [voteCount, setVoteCount] = useState(votes);
  const [incVote, setIncVote] = useState(false);
  const [decVote, setDecVote] = useState(false);

  const handleUpVoteClick = () => {
    if (!incVote) {
      setVoteCount((currVoteCount) => currVoteCount + 1);
      patchInc(article_id).then((data) => {
        setVoteCount(data);
      });
      setIncVote(true);
      setDecVote(false);
    }
  };

  const handleDownVoteClick = () => {
    if (!decVote) {
      setVoteCount((currVoteCount) => currVoteCount - 1);
      patchDec(article_id).then((data) => {
        setVoteCount(data);
      });
      setDecVote(true);
      setIncVote(false);
    }
  };

  return (
    <>
      <Button onClick={handleUpVoteClick} size="sm">
        👍
      </Button>
      <span> </span>
      <Button onClick={handleDownVoteClick} size="sm">
        👎
      </Button>
      <Card.Text>Votes: {voteCount}</Card.Text>
    </>
  );
};

export default Vote;