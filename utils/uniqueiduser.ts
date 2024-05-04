export function uniqueidUser():string{
	const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let id = '';
  
	for (let i = 0; i < 7; i++) {
	  const randomIndex = Math.floor(Math.random() * characters.length);
	  id += characters.charAt(randomIndex);
	}
  
	return id;
  }