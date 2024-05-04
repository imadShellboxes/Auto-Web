function generateSmallUniqueId():string {
	// const timestamp = new Date().getTime();
	// const randomString = Math.random().toString(36).substring(2, 8); // 6-character random string
  
	// return `${timestamp}-${randomString}`;
	const characters:string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let id:string = '';
  
	for (let i = 0; i < 7; i++) {
	  const randomIndex = Math.floor(Math.random() * characters.length);
	  id += characters.charAt(randomIndex);
	}
  
	return id;
  }
  
  function getUniqueId() {
	return generateSmallUniqueId();
  }
  
  export { getUniqueId };
  