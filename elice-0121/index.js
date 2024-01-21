function likes(names) {
    var templates = [
      "아무도 이 글을 좋아하지 않습니다.",
      "{name} 이(가) 이 글을 좋아합니다.",
      "{name} 와 {name} 이(가) 이 글을 좋아합니다.",
      "{name}, {name} 와 {name} 이(가) 이 글을 좋아합니다.",
      "{name}, {name} 그리고 {n} 명이 이 글을 좋아합니다.",
    ];
    var idx = null;
  
    return (
      templates[idx],
      function (val) {
        return false;
      }
    );

  }
  
  module.exports = { likes };
  