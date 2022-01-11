class Solution:
  def clonestack(self, st, cloned):
    for i in range(0, len(st)):
      cloned.append(st[i])
    return 1