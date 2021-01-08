import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 5px;
  background: #fff;
  height: 80px;
`;
export const Left = styled.View`
  padding-right: 90px;
`;
export const Description = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: justify;
`;
export const Right = styled.View`
  display: flex;
  flex-direction: row;
  align-self: flex-end;

  position: absolute;
`;
export const UpdateIcon = styled.Image`
  margin-right: 10px;
  top: 12px;
`;
export const DeleteTodo = styled.Image`
  margin-right: 10px;
  top: 12px;
`;
